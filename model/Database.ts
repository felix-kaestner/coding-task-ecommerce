import {Database as SQLiteDatabase} from 'sqlite3'

/**
 * Singleton class containing the database connection.
 */
class Database
{
    private static instance: SQLiteDatabase;
    
    // Avoid instantiation
    private constructor() {}

    public static get Instance() {
        return (this.instance ??= new SQLiteDatabase('db.sqlite', (err) => {
            if (err) return console.error(err.message)
            console.log('Connected to the in-memory SQlite database.')
        }))
    }

    public static async run(sql: string, params: any[] = []): Promise<void> {
        return new Promise((resolve, reject) => {
            this.Instance.run(sql, params, (err) => {
                if (err) return reject(err)
                resolve()
            })
        })
    }

    public static async get<T>(sql: string, params: any[] = []): Promise<T> {
        return new Promise((resolve, reject) => {
            this.Instance.get(sql, params, (err, rows) => {
                if (err) return reject(err)
                resolve(rows as unknown as T)
            })
        })
    }

    public static async all<T>(sql: string, params: any[] = []): Promise<T> {
        return new Promise((resolve, reject) => {
            this.Instance.all(sql, params, (err, rows) => {
                if (err) return reject(err)
                resolve(rows as unknown as T)
            })
        })
    }
}

export default Database