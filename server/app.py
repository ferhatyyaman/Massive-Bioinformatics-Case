from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def connect_to_database(): 
    conn = sqlite3.connect('mydatabase.db')
    return conn


def close_database_connection(conn):
    conn.close()


@app.route('/', methods=['GET'])
def get_veriler():
    try:
        
        conn = connect_to_database()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM report_output")
        veriler = cursor.fetchall()

        results = []
        for veri in veriler:
            results.append({
                'main_uploaded_variation': veri[1],
                'main_existing_variation': veri[2],
                'main_symbol': veri[3],
                'main_af_vcf': veri[4],
                'main_dp': veri[5],
                'details2_provean': veri[6],
                'details2_dann_score': veri[7],
                'links_mondo': veri[8],
                'links_pheno_pubmed': veri[9]
            })

        close_database_connection(conn)

        return jsonify({'data': results})
    except Exception as e:
        return jsonify({"status": "başarısız", "error_message": str(e)})
 

if __name__ == '__main__':
    app.run(debug=True)
