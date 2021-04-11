//https://www.eclipse.org/paho/clients/js/

function senso1() {
	alert("led on"); // para comentar
	//console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
  	message = new Paho.MQTT.Message("sensor1");
   	message.destinationName = "kevinguadalupe15@gmail.com/tema1";
   	client.send(message);

}

function senso2(){	
	alert("led off");
	//console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("sensor2");
    	message.destinationName = "kevinguadalupe15@gmail.com/tema3";
    	client.send(message);
}





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "kevinguadalupe15@gmail.com",
    password: "kevin2000",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("kevinguadalupe15@gmail.com/tema2");
    message = new Paho.MQTT.Message("ESTADO_SENSOR");
    message.destinationName = "kevinguadalupe15@gmail.com/tema3";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }
  
