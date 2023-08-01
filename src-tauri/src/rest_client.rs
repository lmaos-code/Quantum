
use reqwest::{Error, Response};
async fn make_request(url: &str, method: &str, body: Option<&str>) -> Result<Response, Error> {
    let client = reqwest::Client::new();
    let request_builder = match method {
        "GET" => client.get(url),
        "POST" => client.post(url),
        "PUT" => client.put(url),
        "DELETE" => client.delete(url),
        _ => panic!("Invalid HTTP method"),
    };
    let request_builder = if let Some(body) = body {
        request_builder.body(body.to_owned())
    } else {
        request_builder
    };
    let response = request_builder.send().await?;
    Ok(response)
}

#[tauri::command]
pub async fn get(url: String) -> Result<Response, Error> {
    print!("GET {}", url);
    make_request(&url, "GET", None).await
}
