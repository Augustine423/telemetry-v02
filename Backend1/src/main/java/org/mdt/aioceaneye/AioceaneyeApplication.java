package org.mdt.aioceaneye;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditAwareImpl")
@OpenAPIDefinition(
        info = @Info(
                title = "AiOceanEye REST API Documentation",
                description = "Company and Vessel CRUD REST API Documentation",
                version = "v1",
                contact = @Contact(
                        name = "AiOceanEye",
                        email = "pyaephyolwin655@gmail.com"
                )
        )
)
public class AioceaneyeApplication {

    public static void main(String[] args) {
        SpringApplication.run(AioceaneyeApplication.class, args);
    }

}
