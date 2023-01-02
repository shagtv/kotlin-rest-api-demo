package com.shagtv.web.datasource

import com.shagtv.web.model.Bank
import org.springframework.stereotype.Repository

@Repository
class MockDataSource : BankDataSource {

    val banks = listOf(Bank("", 0.0, 1))

    override fun getBanks(): Collection<Bank> = banks
}
