package com.shagtv.web.datasource

import com.shagtv.web.model.Todo
import org.springframework.stereotype.Repository
import java.lang.IllegalArgumentException

@Repository("TodoMock")
class TodoMockDataSource : TodoDataSource {

    val todos = mutableListOf(
        Todo(1, "Task 1", false),
        Todo(2, "Task 2", false),
        Todo(3, "Task 3", false),
    )

    override fun retrieveTodos(): Collection<Todo> = todos
    override fun retrieveTodo(id: Long): Todo {
        return todos.firstOrNull() { it.id == id }
            ?: throw NoSuchElementException("Could not find a todo with id $id")
    }

    override fun addTodo(todo: Todo): Todo {
        if (todos.any { it.id == todo.id }) {
            throw IllegalArgumentException("Todo with id ${todo.id} already exists")
        }

        todos.add(todo)

        return todo
    }

    override fun updateTodo(todo: Todo): Todo {
        val currentTodo = todos.firstOrNull() { it.id == todo.id }
            ?: throw NoSuchElementException("Could not find a todo with id ${todo.id}")

        todos.remove(currentTodo)
        todos.add(todo)

        return todo
    }

    override fun deleteTodo(id: Long) {
        val currentTodo = todos.firstOrNull() { it.id == id }
            ?: throw NoSuchElementException("Could not find a todo with id $id")

        todos.remove(currentTodo)
    }
}
