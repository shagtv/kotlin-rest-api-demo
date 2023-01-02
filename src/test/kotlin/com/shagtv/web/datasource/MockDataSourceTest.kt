package com.shagtv.web.datasource

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class MockDataSourceTest {

    private val mockDataSource = MockDataSource()

    @Test
    fun `should provide a collection of banks`() {
        // when
        val banks = mockDataSource.getBanks()

        // then
        assertThat(banks).isNotEmpty()
    }

    @Test
    fun `should provide some mock data`() {
        // when

        // then

    }
}
