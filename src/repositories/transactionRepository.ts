import { Pool } from 'pg';
import pool from '../config/database';
import { Transaction } from '../models/transactionModel';

export class TransactionRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todas as Transações

  async getAllTransaction(): Promise<Transaction[]> {
    const { rows } = await this.pool.query('SELECT * FROM transactions');
    return rows;
  }

  // Método para adicionar novas Transações
  async addTransaction(id: number, id_product: number, id_user: number): Promise<Transaction> {
    const queryText = 'INSERT INTO transactions(id, id_product, id_user) VALUES($1, $2, $3) RETURNING *';
    const { rows } = await this.pool.query(queryText, [id, id_product, id_user]);
    return rows[0];
  }
}