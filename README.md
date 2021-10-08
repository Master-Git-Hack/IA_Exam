<!-- @format -->

# IA_Exam

## Technologies used for this evaluation.

-   Python 3.8.10
-   Node 16.5.0
-   React 17.0.2
    > Note: The following app was developed on a linux platform, so this file was documented to this os (Linux Lite based on Ubuntu).

## Libraries used for each part.

### Python

For more references check requirements.txt on Backend folder.

-   Flask
-   Flask-Cors
-   python-dotenv

### React

For more references check package.json on Frontend folder.
-react-bootstrap

## How to run it.

1. First, you need to run backend.

```bash
source env/bin/activate

pip install -r requirements.txt

python run.py
```

2. With backend running, you can test api routes with a client with the following endpoints, using your server address:

|  #  | Reference      |             Route              | Method(s) |                                      Params                                      |
| :-: | -------------- | :----------------------------: | :-------: | :------------------------------------------------------------------------------: |
|  1  | Validate stock |       /api/manage/stock        |    GET    |                                        -                                         |
|  2  | Get all orders |    /api/transaction/get/all    |    GET    |                                        -                                         |
|  3  | Add Order      |      /api/transaction/add      |   POST    | sku:(integer),status:(string), order:(Array)[{type:(string),quantity:(integer)}] |
|  4  | Change Status  | /api/transaction/update/status |   PATCH   |                          sku:(integer),status:(string),                          |

1. If you need to test Frontend to test backend, execute the following command:

```bash
yarn start
```

or

```bash
npx start
```
