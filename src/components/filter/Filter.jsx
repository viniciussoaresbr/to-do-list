import Checkbox from "../common/checkbox/Checkbox";
import Input from "../common/input/Input";

const Filter = ({
    searchStr = "",
    fnChangeSearchStr = () => {},
    done = true,
    fnChangeDone = () => {},
    undone = true,
    fnChangeUndone = () => {},
}) => {
    return (
        <>
            <Input
                label="Pesquisar:"
                value={searchStr}
                evChange={({ value }) => {
                    fnChangeSearchStr({ value });
                }}
            />
            <Checkbox
                checked={done}
                evClick={({ checked }) => {
                    fnChangeDone({ checked });
                }}
            />
            <Checkbox
                checked={undone}
                evClick={({ checked }) => {
                    fnChangeUndone({ checked });
                }}
            />
        </>
    );
};

export default Filter;
