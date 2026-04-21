package com.example.demo;

public record Greeting(String content) { }
/* La keyword record è equivalente a quanto scritto qui sotto
public class Greeting {
    private final String content;

    public Greeting(String content){
        this.content = content;
    }

    public String getContent() {  // <-- il nome dei campi del json vengono stabiliti dai nomi delle funzioni che inziano con get<field>
        return content;
    }
}
*/