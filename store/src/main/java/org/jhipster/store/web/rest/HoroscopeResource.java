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
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * REST controller for managing Horoscope.
 */
@RestController
@RequestMapping("/api")
public class HoroscopeResource {

    private final Logger log = LoggerFactory.getLogger(ProductResource.class);
    private final String ipServiceUrl = "http://api.ipify.org?format=json";

    @GetMapping(value = "/horoscope", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> horoscope() throws JSONException {

        RestTemplate restTemplate = new RestTemplate();

        String response;
        Map<String, String> ipData = new HashMap<>();

        try {

            ipData = restTemplate.getForObject(ipServiceUrl, HashMap.class);
            log.debug("Ip received:" + ipData.toString());
            response =  ipData.get("ip");

            return new ResponseEntity<String>(response, HttpStatus.OK);


        } catch (Exception e) {

            response = "exception " + e.getMessage();

            return new ResponseEntity<String>(response, HttpStatus.OK);

        }
    }

}
