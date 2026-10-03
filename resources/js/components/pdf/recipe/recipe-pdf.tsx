import { Document, Page, Text, View } from '@/components/pdf/pdf-primitives';

import { Heading } from '@/components/pdf/heading';
import { Section } from '@/components/pdf/section';
import { PdfList } from '@/components/pdf/list';
import { PdfImage } from '@/components/pdf/pdf-image';
import { PageFooter } from '@/components/pdf/page-footer';

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
                <View
                    style={{
                        paddingTop: 3,
                        paddingRight: 40,
                        paddingBottom: 3,
                        paddingLeft: 40,
                    }}
                >
                    {/* Footer */}
                    <PageFooter variant="simple" leftText="Toby's Rezeptbuch" />
                </View>
            </Page>
        </Document>
    );
}
