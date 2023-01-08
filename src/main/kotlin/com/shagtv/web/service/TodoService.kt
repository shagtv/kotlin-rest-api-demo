package com.shagtv.web.service

import com.shagtv.web.datasource.TodoDataSource
import com.shagtv.web.model.Todo
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service

@Service
class TodoService (@Qualifier("TodoMock") private val dataSource: TodoDataSource) {

    fun getTodos(): Collection<Todo> = dataSource.retrieveTodos()
    fun getTodo(id: Long) = dataSource.retrieveTodo(id)
    fun addTodo(todo: Todo) = dataSource.addTodo(todo)
    fun updateTodo(todo: Todo) = dataSource.updateTodo(todo)
    fun deleteTodo(id: Long): Unit = dataSource.deleteTodo(id)
}
