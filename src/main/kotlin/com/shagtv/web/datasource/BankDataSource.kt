package com.shagtv.web.datasource

import com.shagtv.web.model.Bank

interface BankDataSource {

    fun getBanks(): Collection<Bank>
}
