import { ListingClient, CommerceCatalog, AtellixClient } from '@atellix/catalog'
import anchor from '@coral-xyz/anchor'
async function main() {
    const provider = anchor.AnchorProvider.env()
    const listingClient = new ListingClient(provider)
    console.log(JSON.stringify(await listingClient.getListings({
        source: 'solana',
        catalog: 'commerce',
        category: 'http://www.productontology.org/id/Watch',
        //category: 'http://www.productontology.org/id/Test_drive',
        //category: 'http://rdf.atellix.net/1.0/catalog/public/Watches',
    }), null, 4))
}
main().then(() => {})
