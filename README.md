# IA_Exam

## Technologies used for this evaluation.
- Python 3.8.10
- Node 16.5.0
- React 17.0.2
- 
> Note: The following app was developed on a linux platform, so this file was documented to this os (Linux Lite based on Ubuntu).

## Libraries used for each part.

### Python
For more references check requirements.txt on Backend folder.
- Flask 

### React
For more references check package.json on Frontend folder.

## How to run it.
1. First, you need to run backend.
```bash
source env/bin/activate

pip install -r requirements.txt

python run.py
```
2. With backend running, you can test api routes with a client with the following endpoints:

| # | Reference | Route | Method(s) | Params | Example |
|:-:|-----------|:-----:|:------:|:------:|:-------:|
| 1 |Validate duplicate SKUs|GET / POST||||
| 2 |Validate stock and send alert for a new order|GET||||
| 3 |Manage of status: Pending   |GET / POST ||||
| 4 |Manage of status: In Process|GET / PATCH||||
| 5 |Manage of status: Completed |GET / PATCH||||
| 6 |Manage of status: Delivered |GET / PATCH||||
| 7 |Manage of status: Canceled  |GET / PATCH||||


3. If you need to test Frontend to test backend, execute the following command:

```bash
yarn start
```
or
```bash
npx start
```
