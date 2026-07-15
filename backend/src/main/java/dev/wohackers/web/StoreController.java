package dev.wohackers.web;

import dev.wohackers.dto.StoreSnapshot;
import dev.wohackers.service.AuthService;
import dev.wohackers.store.AppStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/store")
public class StoreController {

    private final AppStore store;
    private final AuthService authService;

    public StoreController(AppStore store, AuthService authService) {
        this.store = store;
        this.authService = authService;
    }

    @GetMapping
    public StoreSnapshot get(@RequestHeader(value = "Authorization", required = false) String authorization) {
        authService.require(AuthController.extractToken(authorization));
        return store.snapshot();
    }

    @PutMapping
    public StoreSnapshot put(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody StoreSnapshot body) {
        authService.require(AuthController.extractToken(authorization));
        store.replace(body);
        return store.snapshot();
    }
}
