package com.shagtv.web.datasource

import com.shagtv.web.datasource.TodoMockDataSource
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class TodoMockDataSourceTest {

    private val mockDataSource = TodoMockDataSource()

    @Test
    fun `should provide a collection of todos`() {
        // when
        val todos = mockDataSource.retrieveTodos()

        val map = mutableMapOf<Double,Int>()
        map[0.5] = map.getOrDefault(0.5, 1) + 1
        println(map[0.5])

        // then
        assertThat(todos.size).isGreaterThanOrEqualTo(3)
    }

    @Test
    fun `should provide some mock data`() {
        // when
        val todos = mockDataSource.retrieveTodos()

        // then
        assertThat(todos).allMatch { it.id > 0 }
        assertThat(todos).anyMatch() { it.todo.isNotBlank() }
        assertThat(todos).anyMatch { !it.isDone }
    }
}
