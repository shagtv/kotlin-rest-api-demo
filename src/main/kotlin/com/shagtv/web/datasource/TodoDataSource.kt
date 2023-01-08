package com.shagtv.web.datasource

import com.shagtv.web.model.Todo

interface TodoDataSource {

    fun retrieveTodos(): Collection<Todo>
    fun retrieveTodo(id: Long): Todo
    fun addTodo(todo: Todo): Todo
    fun updateTodo(todo: Todo): Todo
    fun deleteTodo(id: Long)
}
