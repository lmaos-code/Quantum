// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod rest_client;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![rest_client::get])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
