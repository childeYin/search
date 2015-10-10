#### 背景

再看tcp/ip的时候突然想做一个输入简写返回给你全称的app,仅限于计算机语言.基于ios

代码在https://gist.github.com/noscripter/938986dd4ddc01195c9a#comment-1459630 的基础上稍作了修改

#### 说明

- 使用了了react native
  
- 文件里面包含数据 SearchPageWordFile.js (使用了immutable)
  
- 接口返回数据类型 SearchPage.js
  
  ``` 
  example
  
  input: tcp
  output:
  {
  	"response": {
      	"status": true, 
      	"full_word": "transmission control protocol"
  	}
  }
  ```