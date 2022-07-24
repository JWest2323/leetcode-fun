/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface HtmlParser {
 *     public List<String> getUrls(String url) {}
 * }
 */
class Solution {
    private Set<String> set;
    private String host;
    private HtmlParser htmlParser;
    
    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        set = ConcurrentHashMap.newKeySet(); // init a class concurrent set
        host = getHost(startUrl); // store host using startUrl
        this.htmlParser = htmlParser; // init htmlParser
        crawlR(startUrl); // make recursive call on initial input
        return new ArrayList<>(set); // ret set as an ArrayList
    }
    private void crawlR(String startUrl) {
        if (set.contains(startUrl) || !getHost(startUrl).equals(host)) return; // if we've crawled here before or diff host
        set.add(startUrl); // else add startUrl
        htmlParser.getUrls(startUrl).parallelStream().forEach(this::crawlR); // using htmlParser call crawlR in parallel
    }
    private static String getHost(String url) {
        int end = url.indexOf('/', 7); // store idx of first occurrence of / starting from idx 7
        return url.substring(7, end == -1 ? url.length(): end); // if end null, ret entire url else the hostName from url
    }
}