import * as childProcess from 'child_process';
import { Logger } from '@eigenspace/logger';

export abstract class Executor {
    protected logger = new Logger({ component: 'Executor' });

    constructor(private readonly exec = childProcess.execSync) {
    }

    protected run(command: string): string {
        this.logger.info('run', 'run command:', command);
        const stdout = this.exec(command, { encoding: 'utf8' });
        this.logger.info('run', stdout);
        return stdout;
    }
}
