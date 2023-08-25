// After jest 24 they stricter returned type from Mock function.
// So typescript asks for full type matching includes private fields.
// Mock interface: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a4a35ecdf937493d4ffed43c956c65fd7ad5ec73/types/jest/index.d.ts#L1088
// StackOverflow same situation: https://stackoverflow.com/questions/54680300/why-is-jest-v24-mocking-class-requiring-private-methods

const MockGitExecutor = jest.fn()
    .mockImplementation(() => ({
        branch: jest.fn(),
        checkout: jest.fn(),
        commit: jest.fn(),
        push: jest.fn(),
        getCommitHistory: jest.fn()
    }));
const mockGitExec = new MockGitExecutor();

const MockNpmExecutor = jest.fn()
    .mockImplementation(() => ({
        publish: jest.fn(),
        checkIfVersionExists: jest.fn(),
        search: jest.fn()
    }));
const mockNpmExec = new MockNpmExecutor();

export const dependencies = { gitExec: mockGitExec, npmExec: mockNpmExec };
