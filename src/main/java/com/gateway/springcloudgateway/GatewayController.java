package com.gateway.springcloudgateway;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;

@RestController
public class GatewayController {

    @GetMapping(
            value = "/.well-known/{name}",
            produces = MediaType.APPLICATION_OCTET_STREAM_VALUE
    )
    public @ResponseBody
    byte[] getFile(@PathVariable String name) throws IOException {
        InputStream in = getClass().getResourceAsStream("/.well-known/" + name);
        return IOUtils.toByteArray(in);
    }

}
