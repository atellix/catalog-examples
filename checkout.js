import { ListingClient, CommerceCatalog, AtellixClient } from '@atellix/catalog'
import anchor from '@coral-xyz/anchor'
async function main() {
    const provider = anchor.AnchorProvider.env()
    const listingClient = new ListingClient(provider)
    const merchants = await listingClient.getListings({
        catalog: 'commerce',
        category: 'http://www.productontology.org/id/Test_drive',
    })
    for (var merchantListing of merchants.listings) {
        const merchantOffers = await listingClient.getListingEntries({
            url: merchantListing.url
        })
        const commerce = new CommerceCatalog()
        const order = await commerce.prepareOrder({
            items: [{'id': merchantOffers.entries[0].id}],
            payment_method: 'atellixpay',
            billing_address: {
                'country': 'us',
            },
            shipping_address: {
                'email': 'mfrager@gmail.com',
                'country': 'us',
            },
        })
        console.log(order)
        const atxpay = new AtellixClient(provider)
        const ckout = await atxpay.checkout(order.payments, provider.wallet.publicKey, 'USDC')
        console.log(ckout)
    }
}
main().then(() => {})
