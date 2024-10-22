from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os
print(os.getcwd())

app = Flask(__name__)
CORS(app)  # Habilita CORS para toda a API

tabela = pd.read_csv('advertising.csv')


@app.route('/')
def homepage():
    return 'A API está funcionando'

@app.route('/total_vendas')
def total_vendas():
    total = tabela['Vendas'].sum()
    return jsonify({'total_vendas': total})

@app.route('/media_vendas')
def media_vendas():
    media_tv = tabela['TV'].mean()
    media_radio = tabela['Radio'].mean()
    media_jornal = tabela['Jornal'].mean()
    return jsonify({
        'media_tv': media_tv,
        'media_radio': media_radio,
        'media_jornal': media_jornal
    })

if __name__ == '__main__':
    app.run('0.0.0.0')