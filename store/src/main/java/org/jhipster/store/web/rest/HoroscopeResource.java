package org.jhipster.store.web.rest;

/**
 * Created by alexandru.ciocan on 08/01/2018.
 */
import com.codahale.metrics.annotation.Timed;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * REST controller for managing Horoscope.
 */
@RestController
@RequestMapping("/api")
public class HoroscopeResource {

    private final Logger log = LoggerFactory.getLogger(ProductResource.class);
    private final String horoscopeApiUrl = "https://horoscop.ournet.ro/api/reports.json?client=HoroscopeApp";

    @Bean
    @LoadBalanced
    RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Autowired
    RestTemplate restTemplate;

    public HoroscopeResource() {}


    @PostMapping(value = "/horoscope", produces = "application/json")
    @Timed
    public ResponseEntity<Object> horoscope(@RequestBody Object requestBody) throws JSONException {

        JSONObject response = new JSONObject();
        JSONObject horoscopeData;

        try {

            log.debug("Received request with body: " + requestBody);
            horoscopeData = restTemplate.getForObject(horoscopeApiUrl, JSONObject.class);
            log.debug(horoscopeData.toString());

            return new ResponseEntity<Object>(response, HttpStatus.OK);

        } catch (Exception e) {

            response.put("exception", true);
            response.put("message", e.getMessage());

            return new ResponseEntity<Object>(response, HttpStatus.OK);

        }
    }


}
