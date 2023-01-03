package com.shagtv.web.service

import com.shagtv.web.datasource.BankDataSource
import com.shagtv.web.model.Bank
import org.springframework.stereotype.Service

@Service
class BankService (private val dataSource: BankDataSource) {

    fun getBanks(): Collection<Bank> = dataSource.retrieveBanks()
    fun getBank(accountNumber: String) = dataSource.retrieveBank(accountNumber)
    fun addBank(bank: Bank) = dataSource.addBank(bank)
    fun updateBank(bank: Bank) = dataSource.updateBank(bank)
    fun deleteBank(accountNumber: String): Unit = dataSource.deleteBank(accountNumber)
}
