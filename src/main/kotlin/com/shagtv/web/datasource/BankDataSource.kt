package com.shagtv.web.datasource

import com.shagtv.web.model.Bank

interface BankDataSource {

    fun retrieveBanks(): Collection<Bank>
}
