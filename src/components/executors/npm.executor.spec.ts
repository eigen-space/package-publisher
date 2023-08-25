import { NpmExecutor } from './npm.executor';

describe('NpmExecutor', () => {
    let executor: NpmExecutor;
    const execFn = jest.fn();

    beforeEach(() => {
        executor = new NpmExecutor(execFn);

        jest.resetAllMocks();
        jest.clearAllMocks();
    });

    describe('checkIfVersionExists', () => {
        it('should return true if the version exists', () => {
            mockVersionExisting();
            expect(executor.checkIfVersionExists('1.0.8')).toBeTruthy();
        });

        it('should return false if the version exists', () => {
            mockNoFoundVersion();
            expect(executor.checkIfVersionExists('1.0.8')).toBeFalsy();
        });

        function mockVersionExisting(): void {
            (execFn as jest.Mock).mockReturnValue('1.0.8');
        }

        function mockNoFoundVersion(): void {
            (execFn as jest.Mock).mockImplementation(() => {
                throw new Error('No package 404');
            });
        }
    });
});
