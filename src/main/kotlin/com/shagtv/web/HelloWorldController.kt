package com.shagtv.web

import jdk.jfr.ContentType
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/hello")
class HelloWorldController {
    @GetMapping()
    fun helloWorld(): String = "{\n" +
            "  \"results\": [\n" +
            "    {\n" +
            "      \"account_number\": \"1234\",\n" +
            "      \"trust\": 3.14,\n" +
            "      \"default_transaction_fee\": 17\n" +
            "    },\n" +
            "    {\n" +
            "      \"account_number\": \"1010\",\n" +
            "      \"trust\": 17,\n" +
            "      \"default_transaction_fee\": 0\n" +
            "    },\n" +
            "    {\n" +
            "      \"account_number\": \"5678\",\n" +
            "      \"trust\": 0,\n" +
            "      \"default_transaction_fee\": 100\n" +
            "    }\n" +
            "  ]\n" +
            "}"
}
