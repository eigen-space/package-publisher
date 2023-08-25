import { Executor } from './executor';

export class NpmExecutor extends Executor {

    publish(dir: string): string {
        // We use public access to be able publish public packages at first time to npm registry.
        // Private packages are on private hosting so it does not affect them.
        return this.run(`npm publish ${dir} --access public`);
    }

    checkIfVersionExists(version: string): boolean {
        try {
            this.run(`npm view ${version} version`);
            return true;
        } catch (e) {
            return false;
        }
    }

    search(packageName: string): string {
        return this.run(`npm search ${packageName} --json`);
    }
}
