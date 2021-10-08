from src import app
from src.config import port, debug, host

if __name__ == '__main__':
    app.run(host, port, debug)