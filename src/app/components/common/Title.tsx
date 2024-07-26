import { Stack, StackProps, Text } from '@chakra-ui/react';

interface Props extends StackProps {
    title: string;
    description?: string;
}

export default function Title(props: Props) {
    const { title, description, ...rest } = props;

    return (
        <Stack {...rest}>
            <Text
                as="h2"
                marginTop="4px"
                fontWeight="600"
                fontSize="24px"
                lineHeight="31px"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            {description && <Text dangerouslySetInnerHTML={{ __html: description }} />}
        </Stack>
    );
}
