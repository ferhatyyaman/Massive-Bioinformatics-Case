import sqlite3

connection = sqlite3.connect('mydatabase.db')
cursor = connection.cursor()

create_table_query = '''
    CREATE TABLE report_output (
        row INTEGER PRIMARY KEY,
        main_uploaded_variation TEXT NOT NULL,
        main_existing_variation TEXT NOT NULL,
        main_symbol TEXT NOT NULL,
        main_af_vcf NUMERIC NOT NULL,
        main_dp NUMERIC NOT NULL,
        details2_provean TEXT NOT NULL,
        details2_dann_score NUMERIC NULL,
        links_mondo TEXT NOT NULL,
        links_pheno_pubmed TEXT NOT NULL
    );
'''
cursor.execute(create_table_query)

with open('insert_queries.txt', 'r') as file:
    query_text = file.read()

queries = query_text.split(';')

for query in queries:
    cursor.execute(query)

connection.commit()
connection.close()