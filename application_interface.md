
# 博学谷接口文档

## 文档说明

### 响应格式

| 名称     | 类型      | 必填  | 说明  |
|:-------|:----------|:----|:---|
| code   | number       |是| 状态码 |
| msg    | string    |是| 状态信息  |
| result | mixed    |否| 响应结果  |
| time   | timestamp |是| 时间戳 |

### 状态码

| 状态码     | 状态信息      | 说明  |
|:-------|:----------|:---|
| 200   | OK       | 成功 |
| 401   |  Unauthorized  | 未授权 |
| 403   |  Forbidden  | 没有权限 |
| 500   |  Interernal Server Error  | 服务器内部错误 |

## 权限管理

### 登录

> 使用讲师姓名和讲师密码登录（如果讲师状态被禁用无法登录）

#### 地址

http://api.botue.com/v6/login

#### 请求

* 请求方式 POST
* 数据格式 FormData
* 请求参数

| 名称      | 必填 | 类型     | 说明   |
|:--------|:---|:-------|:-----|
| tc_name | 是  | string | 用户名称 |
| tc_pass | 是  | string | 用户密码 |

#### 响应

* 数据格式 JSON
* 数据示例

JSON示例

```json
{
  "code": 200,
  "msg": "登录成功!",
  "result": {
    "tc_name": "前端学院",
    "tc_avatar": "http://static.botue.com/images/avatar/58613845e749c.jpg"
  },