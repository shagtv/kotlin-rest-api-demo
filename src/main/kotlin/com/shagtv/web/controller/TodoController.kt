package com.shagtv.web.controller

import com.shagtv.web.model.Todo
import com.shagtv.web.service.TodoService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import java.lang.IllegalArgumentException

@RestController
@RequestMapping("/api/todo")
class TodoController (private val service: TodoService) {

    @ExceptionHandler(NoSuchElementException::class)
    fun handleNotFound(e: NoSuchElementException) : ResponseEntity<String> = ResponseEntity(e.message, HttpStatus.NOT_FOUND)

    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadRequest(e: IllegalArgumentException) : ResponseEntity<String> = ResponseEntity(e.message, HttpStatus.BAD_REQUEST)

    @GetMapping
    fun getTodos(): Collection<Todo> = service.getTodos()

    @GetMapping("/{id}")
    fun getTodo(@PathVariable id: Long): Todo = service.getTodo(id)

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun addTodo(@RequestBody todo: Todo): Todo = service.addTodo(todo)

    @PatchMapping
    fun updateTodo(@RequestBody todo: Todo): Todo = service.updateTodo(todo)

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteTodo(@PathVariable id: Long): Unit = service.deleteTodo(id)
}