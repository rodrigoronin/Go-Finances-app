// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (transaction) {
      await transactionsRepository.remove(transaction);
    }
  }
}

export default DeleteTransactionService;
