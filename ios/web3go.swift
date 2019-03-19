//
//  web3go.swift
//  lastapp
//
//  Created by 域乎 on 2019/3/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import Web3go

@objc(web3go)
class web3go: NSObject {
  private let client = Web3goNewEthereumClient("http://101.91.235.43:33001", nil)
  private let ctx = Web3goNewContext()
  
  // generate wallet
  @objc
  func generateWallet(_ callback: RCTResponseSenderBlock) {
    let priv: Web3goPrivateKey! = Web3goGenerateKey(nil)
    let privBytes = Web3goFromECDSA(priv)
    let priv_key = Web3goEncode(privBytes)
    let pub: Web3goPublicKey! = priv?.public()
    let pubBytes = Web3goFromECDSAPub(pub)
    let pub_key = Web3goEncode(pubBytes)
    let address: Web3goAddress! = Web3goPubkeyToAddress(pub)
    
    let result = "\(address.getHex()!)&&\(priv_key!)&&\(pub_key!)"
    callback([result])
  }
  
  // getBalance
  @objc
  func getBalance(_ address: String, callback: RCTResponseSenderBlock) {
    let address = Web3goNewAddressFromHex(address, nil)
    var ammount :Web3goBigInt!
    do {
      try ammount = client?.getBalanceAt(ctx, account: address, number: -1)
      callback([ammount.getString(10)])
    } catch {
      callback(["error"])
    }
    
    
  }
  
  //  sendTransaction
  @objc
  func sendTransaction(_ privateKey: String, toAddress: String, callback: RCTResponseSenderBlock) {
    let toAdd = Web3goNewAddressFromHex(toAddress, nil)
    let priKey = Web3goHexToECDSA(privateKey, nil)
    let pubKey = priKey?.public()
    let fromAddess = Web3goPubkeyToAddress(pubKey)
    
    let nonce = UnsafeMutablePointer<Int64>.allocate(capacity: 1)
    nonce.pointee = 20
    var sendAction: ()?
    do {
      try client?.getPendingNonce(at: ctx, account: fromAddess, nonce:nonce)
      //      callback([nonce.pointee])
      let value = Web3goNewBigInt(10003400000201000)
      let gasLimit = Int64(21000)
      let gasPrice = Web3goNewBigInt(30000000000)
      
      let data = Data()
      let tx = Web3goNewTransaction(nonce.pointee, toAdd, value, gasLimit, gasPrice, data)
      let signedTx = Web3goSignTx(tx, Web3goNewHomesteadSigner(), priKey, nil)
      try sendAction = client?.sendTransaction(ctx, tx: signedTx)
      //      result = signedTx?.getHash()?.getHex()
      //      callback([sendAction])
      callback([signedTx?.getHash()?.getHex()])
    } catch {
      callback(["error"])
    }
  }
  
  //  getBlockByNumber
  @objc
  func getBlockByNumber(_ bclokNumber: Int64, callback: RCTResponseSenderBlock) {
    var block :Web3goBlock!
    do {
      try block = client?.getBlockByNumber(ctx, number: bclokNumber)
      let blockNumber = block.getNumber()
      let blockGasLimit = block.getGasLimit()
      let blockGasUsed = block.getGasUsed()
      let blockInt64 = block.getDifficulty()?.getInt64()
      let blockTime = block.getTime()
      let blockMixDigestHex = block.getMixDigest()?.getHex()
      let blockNonce = block.getNonce()
      let blockCoinbaseHex = block.getCoinbase()?.getHash()
      let blockRootHex = block.getRoot()?.getHex()
      let blockHashHex = block.getHash()?.getHex()
      let blockTransactionsSize = block.getTransactions()?.size()
      
      let blockInfo = "\(blockNumber)&&\(blockGasLimit)&&\(blockGasUsed)&&\(blockInt64!)&&\(blockTime)&&\(blockMixDigestHex!)&&\(blockNonce)&&\(blockCoinbaseHex!)&&\(blockRootHex!)&&\(blockHashHex!)&&\(blockTransactionsSize!)"
      callback([blockInfo])
    } catch {
      callback(["error"])
    }
  }
  
  @objc
  func getTransactionsWithHash(_ hash: String, callback: RCTResponseSenderBlock) {
    let txHash = Web3goNewHashFromHex(hash, nil)
    var tx :Web3goTransaction!
    do {
      try tx = client?.getTransactionByHash(ctx, hash: txHash)
      let hash = tx.getHash()?.getHex()
      let value = tx.getValue()
      let gas = tx.getGas()
      let gasPrise = tx.getGasPrice()
      let nonce = tx.getNonce()
      let data = tx.getData()
      let to = tx.getTo()?.getHex()
      let signHash = tx.getSigHash()?.getHex()
      
      let result = "\(hash!)&&\(value ?? nil)&&\(gas)&&\(gasPrise ?? nil)&&\(nonce)&&\(data ?? nil)&&\(to!)&&\(signHash!)"
      //      let result = "\(hash!)&&value&&\(gas)&&gasPrise&&\(nonce)&&data&&\(to!)&&\(signHash!)"
      callback([result])
    } catch {
      callback(["error"])
    }
  }
  
  @objc
  func getTransactionReceipt(_ hash: String, callback: RCTResponseSenderBlock) {
    let txHash = Web3goNewHashFromHex(hash, nil)
    var tx: Web3goTransaction!
    var receipt: Web3goReceipt!
    do {
      try tx = client?.getTransactionByHash(ctx, hash: txHash)
      let hash: Web3goHash! = tx.getHash()
      try receipt = client?.getTransactionReceipt(ctx, hash: hash)
      callback([receipt.getStatus()])
    } catch {
      callback(["error"])
    }
  }
  
}
