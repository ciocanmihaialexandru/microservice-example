package org.jhipster.store.web.rest;

/**
 * Created by alexandru.ciocan on 08/01/2018.
 */

import org.json.JSONException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

/**
 * REST controller for managing Horoscope.
 */
@RestController
@RequestMapping("/api")
public class HoroscopeResource {

    private final String ipServiceUrl = "http://api.ipify.org?format=json";

    @GetMapping(value = "/horoscope", produces = "application/json")
    public ResponseEntity<HashMap> horoscope() throws JSONException {

        RestTemplate restTemplate = new RestTemplate();

        HashMap<String, String> response = new HashMap<>();

        try {

            response = restTemplate.getForObject(ipServiceUrl, HashMap.class);

            return new ResponseEntity<HashMap>(response, HttpStatus.OK);

        } catch (Exception e) {

            response.put("exception", "true");
            response.put("message", e.getMessage());

            return new ResponseEntity<HashMap>(response, HttpStatus.OK);

        }
    }

}
