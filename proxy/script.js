const target = {
    message1: "hello",
    message2: "everyone",
  };
  
  const handler = {
    get(target, prop, receiver) {
        console.log(...arguments,'...arguments');
      return target[prop].substring(0, 4) +' HAHAHA';
    },
  };
  
  
  const proxy = new Proxy(target, handler);
console.log(proxy.message1);  