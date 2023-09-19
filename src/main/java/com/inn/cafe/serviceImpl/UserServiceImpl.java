package com.inn.cafe.serviceImpl;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.inn.cafe.constents.CafeConstants;
import com.inn.cafe.service.UserService;
import com.inn.cafe.utils.CafeUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImpl implements UserService{

	@Override
	public ResponseEntity<String> signUp(Map<String, String> requestMap) {
		
		log.info("Inside signup {}", requestMap);
		
		if(validateSignUpMap(requestMap)) {
			
		}else {
			return CafeUtils.getResponseEntity(CafeConstants.INVALID_DATA, HttpStatus.BAD_REQUEST);
		}
		return null;
		
	}
	
	private boolean validateSignUpMap(Map<String, String> requestMap) {
		if(requestMap.containsKey("name") && requestMap.containsKey("contactNumber")
		&& requestMap.containsKey("email") && requestMap.containsKey("password"))
			return true;
		else return false;
	}

}
