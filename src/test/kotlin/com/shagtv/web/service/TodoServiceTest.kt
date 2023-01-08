package com.shagtv.web.service

import com.shagtv.web.datasource.TodoDataSource
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test

internal class TodoServiceTest {

    private val dataSource: TodoDataSource = mockk(relaxed = true)
    private val todoService = TodoService(dataSource)

    @Test
    fun `should call its data source to retrieve todos`() {
        // when
        todoService.getTodos()

        // then
        verify(exactly = 1) { dataSource.retrieveTodos() }
    }
}
