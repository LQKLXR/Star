package com.lqk.coffer;

import com.lqk.coffer.context.GlobalContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class CofferApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext applicationContext = SpringApplication.run(CofferApplication.class, args);
        GlobalContext.applicationContext = applicationContext;
    }

}
