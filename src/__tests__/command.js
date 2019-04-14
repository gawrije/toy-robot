import Command from '../Command';

it('parses command', () => {
    const command = new Command();

    expect(() => {
        command.parse('aa');
    }).toThrow();

    command.parse('xdfasf');
    expect(command.type).toEqual('y');
});
  