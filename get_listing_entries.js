import { ListingClient, CommerceCatalog, AtellixClient } from '@atellix/catalog'
import anchor from '@coral-xyz/anchor'
async function main() {
    const listingClient = new ListingClient()
    const merchants = await listingClient.getListings({
        catalog: 'commerce',
        category: 'http://www.productontology.org/id/Test_drive',
    })
    for (var merchantListing of merchants.listings) {
        const merchantOffers = await listingClient.getListingEntries({
            url: merchantListing.url
        })
        console.log(merchantOffers.entries[0])
    }
}
main().then(() => {})
