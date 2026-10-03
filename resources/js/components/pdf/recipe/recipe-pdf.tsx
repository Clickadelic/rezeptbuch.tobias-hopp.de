import { Document, Page, Text, View } from '@/components/pdf/pdf-primitives';

import { Heading } from '@/components/pdf/heading';
import { Section } from '@/components/pdf/section';
import { PdfList } from '@/components/pdf/list';
import { PdfImage } from '@/components/pdf/pdf-image';
import { PageFooter } from '@/components/pdf/page-footer';

import { PageHeader } from '@/components/pdf/page-header';

interface RecipePdfProps {
    recipe: {
        name: string;
        punchline?: string | null;
        description?: string | null;
        image?: string | null;
        preparation_time?: number | null;
        difficulty?: string | null;
        ingredients?: string[];
        instructions?: string | null;
    };
}

export function RecipePdf({ recipe }: RecipePdfProps) {
    const ingredients = (recipe.ingredients ?? []).map((ingredient) => ({
        text: ingredient,
    }));

    return (
        <Document title={recipe.name}>
            <Page>
                <View>
                    {recipe.image && (
                        <PdfImage
                            position="50% 0%"
                            style={{ marginBottom: '2rem' }}
                            src="data:image/png;base64,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"
                        />
                    )}
                    <Heading weight="normal" level={4} noMargin>
                        {recipe.name}
                    </Heading>

                    <PageFooter
                        variant="simple"
                        leftText={`Toby's Rezeptbuch &middot; https://rezeptbuch.tobias-hopp.de`}
                    />
                </View>
            </Page>
        </Document>
    );
}
