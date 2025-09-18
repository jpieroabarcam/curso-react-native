import prompt from "react-native-prompt-android";

interface Options {
    title: string;
    subTitle?: string;
    buttons: PromptButton[];
    promptType?: 'default' | 'plain-text' | 'secure-text';
    placeHolder?: string;
    defaultValue?: string;
}

interface PromptButton {
    text:string;
    onPress: () => void;
    style?: "cancel" | "default" | "destructive";
}

export const showPrompt = ({
    title,
    subTitle,
    buttons,
    promptType = 'plain-text',
    placeHolder,
    defaultValue}: Options) => {
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeHolder
        }
    );
}